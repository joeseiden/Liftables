```js
{
  currentUser: {
    id: 1,
    username: "barry_bluejeans"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  articles: {
    1: {
      title: "How to squat",
      description: "How to correctly perform a squat",
      owner: userId,
      img_url: image_url,
      contents: [
        { media_url:"video_or_image_url", step_title: 'Step 1', step_detail: 'Sit down' },
        { media_url:"video_or_image_url", step_title: 'Step 2', step_detail: 'Stand up' }
      ],
      comments: {
        1: {
          username: 'bsumner', content: 'I get it now!'
        }
      }
    }
  }
}
```
