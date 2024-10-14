import styles from "./innerCon.module.css"
export default function InnerContainer({children}){
    return (<div className={styles.innerCont}>
{children}
    </div>);
}