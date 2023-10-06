const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
    params: {id: '6688199'},
    headers: {
      'X-RapidAPI-Key': 'f2f6985736msh1fc076f29a16f5dp14555ajsnb4258c1ac17e',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };
  
  try {
    axios.request(options).then((response) => {
      console.log(response.data);
    });
  } catch (error) {
    console.error(error);
  }