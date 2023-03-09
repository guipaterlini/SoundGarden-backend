export const findAllEvents = (req, res) => {
  return res.status(200).json({ events: global.events });
};
