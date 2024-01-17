import './styles.scss';

interface IProps {
  content: string;
}

export default function Divider({ content }: IProps) {
  return <div className='divider'>{content}</div>;
}
