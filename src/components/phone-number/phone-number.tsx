import Input from '@/components/ui/form/input/input';
import styles from './phone-number.module.css'

export default function PhoneNumber({ hasExt = false }) {
  return (
    <div className={styles.phoneNumber}>
      <div className={styles.space}>
        ({' '}<Input classNames={styles.phoneNumberCode} name="phone-number-code" />
        {' '}){' '}<Input classNames={styles.phoneNumberFirstPart} name="phone-number-first-part" />
        {' '}-{' '}<Input classNames={styles.phoneNumberSecondPart} name="phone-number-second-part" />
      </div>
      {
        hasExt
          ? (
            <div>
              ext: <Input classNames={styles.phoneNumberSecondPart} name="phone-number-ext" />
            </div>
          )
          : null
      }
    </div>
  )
}
