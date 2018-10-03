import { h } from 'preact';
import styles from './styles';
import Logo from './logo.svg';

export const Container = ({ children }) => <div class={styles.container}>{children}</div>;
const Footer = ({ children }) => (
	<footer class={styles.footer}>
		{children}
	</footer>
);

export const Powered = () => <h3 class={styles.powered}>Powered by <Logo title="Rocket.Chat" class={style.logo} width="60" /></h3>;
export default Footer;
