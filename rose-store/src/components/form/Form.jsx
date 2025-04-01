import styles from "./Form.module.css";

const Form = () => {
    return (
        <div className={styles["main-container"]}>
            <div className={styles["left-container"]}>
                <div className={styles["content-container"]}>
                    <h1 className={styles.tittle}>Bem-vindo(a) de volta!</h1>
                    <p className={styles.paragraph}>Insira suas credenciais para acessar sua conta</p>
                </div>
            </div>
        </div>
    );
};

export default Form;
