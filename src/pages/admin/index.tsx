import styles from "./styles.module.scss";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { api } from "../../services/api";


export default function Admin() {
    const router = useRouter();
    const [date, setDate] = useState<Date>(new Date());
    const [transparency, setTransparency] = useState(null);

    const handleTransparency = async () => {
        try {
            const response = await api.get(`transparency/find-by-date?year=${date.getFullYear()}&month=${date.getMonth()}`).then(res => res.data);
            if (response.success) {
                setTransparency(response.transparency);
            } else {
                setTransparency(null);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        handleTransparency();
    }, [date])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <h4>Transparencia</h4>
                    <button className={styles.button} onClick={() => router.push('/admin/transparency/create')}>Adicionar</button>
                </div>
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
                    {transparency && <div className={styles.calendarResult}>
                        <article style={{ marginBottom: 24 }}>
                            <span>Novembro</span>
                            <p>
                                <strong>Total de viagem: </strong> {transparency.total_trip}
                            </p>
                            <p>
                                <strong>Km rodados: </strong> {transparency.total_mileage}
                            </p>
                            <p>
                                <strong>Total de passageiros: </strong> {transparency.total_passengers}
                            </p>
                            <p>
                                <strong>Gratuidades: </strong> {transparency.total_free}
                            </p>
                        </article>
                        {transparency?.file &&
                            <a className={styles.button} href={`https://app.transduartego.com.br/${transparency.file}`} target={'_blank'} style={{background: '#333'}}>Baixar prestação de contas</a>
                        }
                        <button className={styles.button} onClick={() => router.push(`/admin/transparency/${transparency.id}`)}>Editar</button>
                    </div>}
                </div>
            </div>
        </div >
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