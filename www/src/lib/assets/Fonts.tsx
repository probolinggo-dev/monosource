import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const roboto = new FontFaceObserver('Muli');

  roboto.load().then(() => {
    document.body.style.fontFamily = 'Muli';
  });
};

export default Fonts;
