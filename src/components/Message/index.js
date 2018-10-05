import { h } from 'preact';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import styles from './styles';
import { createClassName } from '../helpers';
import Avatar from 'components/Avatar';
const Message = ({ _id, Element = 'div', msg, ts, me, ...args }) => (
	<Element id={_id} className={createClassName(styles, 'message', { me })}
		{...args}
	>
		<div className={createClassName(styles, 'message__container', {})}>
			{!me && <Avatar />}
			<div className={createClassName(styles, 'message__text', { me })}>{msg} <div className={createClassName(styles, 'message__time', {})}>{format(ts, 'HH:mm')}</div></div>
			{me && <Avatar />}
		</div>
	</Element>
);

export default Message;
