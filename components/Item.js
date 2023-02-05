import { useContext, useEffect } from 'react';
import Image from 'next/image';
import useAnimation from '../hooks/useAnimation';
import { AppContext } from '../context/app-context';
import styles from '../styles/components/Item.module.scss';

const Item = ({ item: { name, img } }) => {
  const { batchAnimate } = useAnimation();
  const [isLoaded] = useContext(AppContext);

  useEffect(() => {
    if (isLoaded) {
      batchAnimate('.item');
    }
  }, [isLoaded]);

  return (
    <div className={`${styles['item']} item`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/${img}`}
        alt={name}
        width={200}
        height={200}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Item;
