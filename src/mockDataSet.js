const mockDataSet = {
  users: [
    {
      id: 1,
      name: 'Ingrid Morales Jones',
      email: 'imjones@tufts.edu',
      age: 23,
      location: 'Medford, MA',
      currentMood: 'purple',
      image: './',
      activity: [
        {
          type: 'water',
          dailyCount: 4,
          message: 'The water fountains in Ballou Hall are the worst!',
          share: false
        },
        {
          type: 'mood',
          color: 'purple',
          message: 'Mmmm... Chai tea...',
          share: false
        },
        {
          type: 'activity',
          name: 'tea time',
          dailyCount: 2,
          message: 'I\'m at Kung Fu for anyone around here!',
          share: true
        },
        {
          type: 'activity',
          name: 'yoga',
          dailyCount: 1,
          message: '',
          share: false
        },
        {
          type: 'water',
          dailyCount: 3,
          message: 'glup glup glup',
          share: false
        },
        {
          type: 'water',
          dailyCount: 2,
          message: '2 bottles by 10 AM!',
          share: true
        },
        {
          type: 'mood',
          color: 'green',
          message: 'Not feeling it this morning.',
          share: false
        },
        {
          type: 'water',
          dailyCount: 1,
          message: '',
          share: false
        }
      ]
    },
    {
      id: 2,
      name: 'Jennifer Bryant',
      email: 'jbryant@tufts.edu',
      age: 23,
      location: 'Medford, MA',
      currentMood: 'orange',
      image: './',
      activity: [

      ]
    },
    {
      id: 3,
      name: 'Stephanie Jones',
      email: 'stephanie.jones@gmail.com',
      age: 25,
      location: 'Columbus, OH',
      currentMood: 'purple',
      image: './',
      activity: [

      ]
    },
    {
      id: 4,
      name: 'Brian Morgendorfer',
      email: 'borgendorfer@gmail.com',
      age: 24,
      location: 'Boston, MA',
      currentMood: 'purple',
      image: './',
      activity: [

      ]
    },
    {
      id: 5,
      name: 'Marcie Phillips',
      email: 'marcie.phillips@colorado.edu',
      age: 22,
      location: 'Boulder, CO',
      currentMood: 'red',
      image: './',
      activity: [
      ]
    }
  ] 
}

export default mockDataSet;