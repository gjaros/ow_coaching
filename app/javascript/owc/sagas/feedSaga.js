import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios-on-rails'
import { newReview } from '../actions/feed'
import regeneratorRuntime from "regenerator-runtime";

function *postTips(tips) {
  return yield tips.map(tip => axios.post('/tips', tip).then(response => response.data).catch(error => console.log(error)))
}

function *postReview(action) {
  try {
    const review = yield axios.post('/reviews', action.payload.review).then(response => response.data)
    console.log('Returned Review:')
    console.log(review)

    //postTips is passed a mapped copy of the tips that adds the review_id parameter needed before being POST to the server.
    const tips = yield postTips(action.payload.tips.map(tip => ({...tip, review_id: review.id})))
    console.log('Returned Tips:')
    console.log(tips)

    const reviewer_profile = yield select(state => state.feedReducer.user.profile)

    console.log('Assembled Review')
    console.log({ ...review, tips, reviewer_profile })

    yield put(newReview({ ...review, tips, reviewer_profile }))

  } catch (e) {
    console.log(e)
  }
}

function *feedSaga() {
  yield takeEvery('POST_REVIEW', postReview)
}

export default feedSaga
