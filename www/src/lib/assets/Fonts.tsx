import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css?family=Roboto:400,600,600i,700&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const roboto = new FontFaceObserver('Roboto');

  roboto.load().then(() => {
    document.body.style.fontFamily = 'Roboto';
  });
};

export default Fonts;
