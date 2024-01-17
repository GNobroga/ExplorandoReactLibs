import './styles.scss';

interface IProps {
   color: string;
}

export default function Background(props: IProps) {
    return (
        <div className="background" style={{ backgroundColor: props.color }}></div>
    );
}