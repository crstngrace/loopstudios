import Item from './Item';

const Items = () => {
  const items = [
    {
      name: 'Deep earth',
      img: '/assets/images/creations/image-deep-earth.jpg',
    },
    {
      name: 'Night arcade',
      img: '/assets/images/creations/image-night-arcade.jpg',
    },
    {
      name: 'Soccer team VR',
      img: '/assets/images/creations/image-soccer-team.jpg',
    },
    {
      name: 'The grid',
      img: '/assets/images/creations/image-grid.jpg',
    },
    {
      name: 'From up above VR',
      img: '/assets/images/creations/image-from-above.jpg',
    },
    {
      name: 'Pocket borealis',
      img: '/assets/images/creations/image-pocket-borealis.jpg',
    },
    {
      name: 'The curiosity',
      img: '/assets/images/creations/image-curiosity.jpg',
    },
    {
      name: 'Make it fisheye',
      img: '/assets/images/creations/image-fisheye.jpg',
    },
  ];

  const creations = items.map((item, i) => {
    return <Item item={item} key={i} />;
  });

  return creations;
};

export default Items;
