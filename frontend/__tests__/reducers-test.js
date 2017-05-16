import ArticlesReducer from '../reducers/articles_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('ArticlesReducer', () => {
    it('exports a function', () => {
      expect(typeof ArticlesReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ArticlesReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ArticlesReducer(oldState, { type: 'unmatched' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_ARTICLES action', () => {
      let action,
        testArticles;

      beforeEach(() => {
        testArticles = { 1: 'testArticle1', 2: 'testArticle2' };
        action = {
          type: 'RECEIVE_ARTICLES',
          articles: testArticles
        };
      });

      it('should replace the state with the action\'s articles', () => {
        const state = ArticlesReducer(undefined, action);
        expect(state).toEqual(testArticles);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        ArticlesReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState'});
      });
    });

    describe('handling the RECEIVE_ARTICLE action', () => {
      let action,
          testArticle;

      beforeEach(() => {
        testArticle = { id: 1, title: 'testArticle' };
        action = {
          type: 'RECEIVE_ARTICLE',
          article: testArticle
        };
      });

      it('should add the article to the sate using the post id as a key', () => {
        let state = ArticlesReducer(undefined, action);
        expect(state[1]).toEqual(testArticle);
      });

      it('should not affect the other articles in the state', () => {
        let oldState = { 2: 'oldState' };
        let state = ArticlesReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });

    describe('handling the REMOVE_ARTICLE action', () => {
      let action,
          testArticle;

      beforeEach(() => {
        testArticle = { id: 1, title: 'testArticle' };
        action = {
          type: 'REMOVE_ARTICLE',
          article: testArticle
        };
      });

      it('should remove the correct article from the state', () => {
        let state = ArticlesReducer({1: testArticle}, action);
        expect(typeof state[1]).toEqual('undefined');
      });

      it('should not affect the other articles in the state', () => {
        let oldState = { 1: testArticle, 2: 'oldState' };
        let state = ArticlesReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the ArticlesReducer under the key `articles`', () => {
      const article = { id: 1, title: 'Root Reducer', description: 'Testing' };
      const action = { type: 'RECEIVE_ARTICLE', article };
      testStore.dispatch(action);

      expect(testStore.getState().posts).toEqual(ArticlesReducer({ [article.id]: article}, action));
    });
  });
});
