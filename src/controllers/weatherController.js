exports.getWeather = async (req, res, next) => {
  let city = req.params.id;
  try {
    const data = await fetch(
      `${process.env.WEATHER_API}?q=${city}&appid=${process.env.WEATHER_ACCESS_KEY}`
    );
    const response = await data.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
