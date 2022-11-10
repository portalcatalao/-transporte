import styles from "./styles.module.scss";
import Calendar from "react-calendar";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../../../services/api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function CreateTransparency() {
    const [date, setDate] = useState<Date>(new Date());
    const [total_trip, setTotalTrip] = useState('');
    const [total_passengers, setTotalPassengers] = useState('');
    const [total_free, setTotalFree] = useState('');
    const [total_mileage, setTotalMileage] = useState('');
    const [file, setFile]= useState<File>(null);
    const [transparency, setTransparency] = useState(null);
    const router = useRouter();
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(null);

    const handleUploadFile = async (id: string) => {
        const data = new FormData();
        data.append('file', file)

        const response = await api.post(`transparency/upload/${id}`, data).then(res => res.data);
        setTransparency(response.transparency);
    }

    const handleCreateTransparency = async (e) => {
        try {
            e.preventDefault();
            const response = await api.post(`transparency`, {
                month: date.getMonth(),
                year: date.getFullYear(),
                total_trip,
                total_passengers,
                total_free,
                total_mileage
            }).then(res => res.data);
            if(response.success) {
                await handleUploadFile(response.transparency.id);
                router.push(`/admin/transparency/${response.transparency.id}`);
                {error && setError(false)}
            } else {
                setError(true);
                setMessage(response.message);
            }
        } catch (error) {
            setError(true);
            console.log(error)
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.content} onSubmit={handleCreateTransparency}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <h4>Transparencia - Cadastrar</h4>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.calendarContent}>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            maxDetail="year"
                            maxDate={new Date()}
                            minDate={new Date(2022, 0, 1)}
                            next2Label=">>"
                            next2AriaLabel="Próximo ano"
                            prev2Label="<<"
                            prev2AriaLabel="Ano anterior"
                        />
                    </div>
                    <div className={styles.form}>
                        <h4>{month[date.getMonth()]} - {date.getFullYear()}</h4>
                        <div className={styles.input_box}>
                            <label htmlFor="total_trip">Total de viagens:</label>
                            <input type="number" id="total_trip" required value={total_trip} onChange={({ target }) => setTotalTrip(target.value)} />
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="total_mileage">Km rodados:</label>
                            <input type="number" id="total_mileage" required value={total_mileage} onChange={({ target }) => setTotalMileage(target.value)} />
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="total_passengers">Total de passageiros:</label>
                            <input type="number" id="total_passengers" required value={total_passengers} onChange={({ target }) => setTotalPassengers(target.value)} />
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="total_free">Gratuidades:</label>
                            <input type="number" id="total_free" required value={total_free} onChange={({ target }) => setTotalFree(target.value)} />
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="file">Arquivo:</label>
                            <input type="file" id="file" onChange={({ target }) => setFile(target.files[0])} />
                        </div>
                    </div>
                </div>
                {error && message && <span className={styles.error}><strong>Error:</strong> {message}</span>}
                <button className={styles.button}>Cadastrar</button>
            </form>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { 'transduarte.token': token, 'transduarte.user': user } = parseCookies(ctx);

    if (!token || !user) {
        return {
            redirect: {
                destination: `/login`,
                permanent: false,
            }
        }
    }

    return {
        props: {
        }
    }
}