import styles from './SkillCard.module.css'
import { formatImageUrl } from '../../utils/utils'

export interface SkillCardProps {
    id: number
    name: string
    iconDark: string
    iconLight: string
}

export default function SkillCard(props: SkillCardProps) {
    return (
        <div className={styles['skill-container']}>
            <div className={styles['skill-icon-container']}>
                <img className={styles['skill-icon']} src={formatImageUrl(props.iconDark)} alt={props.name} />
            </div>
            <h2 className={styles['product-title']}>{props.name}</h2>
        </div>
    )
}