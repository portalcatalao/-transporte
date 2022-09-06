import Link from "next/link";
import { CreditCard, DollarSign, Map, PhoneCall } from "react-feather";
import Guide from "../../components/Guide";
import styles from "../../components/Guide/styles.module.scss";

export default function quickGuide() {
  return (
    <>
      <section>
        <span className="title">TRANSPORTE URBANO</span>
      </section>

      <Guide />
    </>
  );
}
