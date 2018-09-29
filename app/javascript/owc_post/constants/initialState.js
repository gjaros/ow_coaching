const node = document.getElementById('owc-post-payload');

const post = JSON.parse(node.getAttribute('post'));
const reviews = JSON.parse(node.getAttribute('reviews'));
const profiles = JSON.parse(node.getAttribute('profiles'));
const tips = JSON.parse(node.getAttribute('tips'));
const video = JSON.parse(node.getAttribute('video'));

let reviewsState = reviews.map((review) => (
  {
    ...review,
    profile: profiles.find((profile) => profile.id === review.profile_id),
    tips: tips.filter((tip) => tip.review_id === review.id)
  }
));

export { reviewsState, post, video };
