type Props = {
    image?: string | null;
    size?: 'small' | 'normal';
    highlight?: boolean;
};
export default function Avatar({
                                   image,
                                   size = 'normal',
                                   highlight = false,
                               }: Props) {
    return (
        <div className={getContainerStyle(size, highlight)}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
                className={`object-cover bg-white rounded-full ${getImageSizeStyle(size)}`}
                src={image ?? undefined}
                alt='user profile'
                referrerPolicy='no-referrer'
            />
        </div>
    );
}

const getContainerStyle = (size: string, highlight: boolean): string => {
    const base = 'rounded-full flex justiy-center items-center';
    const highlightStyle = highlight
        ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
        : '';
    const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';

    return `${sizeStyle} ${highlightStyle} ${base}`;
};

const getImageSizeStyle = (size: string): string => {
    return size === 'small' ? 'w-[34px] h-[34px] p-[0.1rem]' : 'w-16 h-16 p-[0.2rem]';
};
