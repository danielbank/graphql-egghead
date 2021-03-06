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

const getVideos = () => new Promise(resolve => resolve(videos));

const createVideo = ({ title, duration, released }) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration,
    released,
  }
  videos.push(video);
  return video;
};

const getObjectById = (type, id) => {
  const types = {
    video: getVideoById,
  }

  return types[type](id);
}

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;
exports.getObjectById = getObjectById;