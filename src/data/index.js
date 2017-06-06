const videoA = {
  id: '1',
  title: 'Video A',
  duration: 1337,
  watched: false,
};

const videoB = {
  id: '2',
  title: 'Video B',
  duration: 42,
  watched: true,
};

const videos = [videoA, videoB];

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  resolve(video);
});

exports.getVideoById = getVideoById;