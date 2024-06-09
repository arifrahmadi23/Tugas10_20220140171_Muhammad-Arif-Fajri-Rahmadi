import logo from './logo.svg';
import './App.css';

function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section className="VideoList">
      <h2>{heading}</h2>
      {videos.length > 0 ? (
        videos.map(video =>
          <div key={video.id} className="VideoItem">
            <h3>{video.title}</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="VideoFrame"
                src={video.url}
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          </div>
        )
      ) : (
        <h3 className="EmptyHeading">{emptyHeading}</h3>
      )}
    </section>
  );
}
function App() {
  const videos = [
    { id: 1, title: 'Guns N\' Roses - Sweet Child O\' Mine', url: 'https://www.youtube.com/embed/1w7OgIMMRc4' },
    { id: 2, title: 'Guns N\' Roses - November Rain', url: 'https://www.youtube.com/embed/8SbUC-UaAxE' },
    { id: 3, title: 'Guns N\' Roses - Welcome To The Jungle', url: 'https://www.youtube.com/embed/o1tj2zJ2Wvg' },
  ];

  return (
    <div className="App container mt-5">
      <header className="App-header bg-primary text-white p-5 rounded">
        <img src={logo} className="App-logo img-fluid mb-3" alt="logo" />
        <h1 className="display-4">Gun N' Roses</h1>
        <p className="lead">
          Gun n Roses, situs web resmi untuk salah satu band rock paling ikonik sepanjang masa. Temukan berita terbaru, jadwal tur, galeri foto, merchandise resmi, dan konten eksklusif lainnya tentang band legendaris ini. Dari musik yang menggelegar hingga kisah di balik panggung, situs ini menjadi destinasi utama bagi penggemar yang haus akan semua hal Gun n Roses.
        </p>
        <a
          className="App-link btn btn-light btn-lg mb-5"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      
      <VideoList videos={videos} emptyHeading="No Videos Available" />
      
    </div>
  );
}

export default App;
