import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesAction } from '../actions';

function Stories(props) {
  if (props.loading) {
    return <p>Please Wait...</p>;
  }
  return (
    <div>
      <button type="button" onClick={props.loadStories}>
        Load Top 5 Stories
      </button>
      <StoryList {...props} />
    </div>
  );
}

function StoryList(props) {
  return (
    <ul>
      {props.stories.map(story => (
        <li key={story.id}>
          <a href={story.url}>{story.title}</a>
        </li>
      ))}
    </ul>
  );
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadStories: () => dispatch(fetchStoriesAction())
  };
}

export default connect(mapState, mapDispatch)(Stories);
