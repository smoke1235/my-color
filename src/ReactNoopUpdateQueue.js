/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
	/**
	 * Checks whether or not this composite component is mounted.
	 * @return {boolean} True if mounted, false otherwise.
	 * @protected
	 * @final
	 */
	isMounted: function() {
		return false;
	},

	/**
    * Forces an update. This should only be invoked when it is known with
    * certainty that we are **not** in a DOM transaction.
    *
    * You may want to call this when you know that some deeper aspect of the
    * component's state has changed but `setState` was not called.
    *
    * This will not invoke `shouldComponentUpdate`, but it will invoke
    * `componentWillUpdate` and `componentDidUpdate`.
    *
    * @internal
    */
	enqueueForceUpdate: function() {},

	/**
    * Replaces all of the state. Always use this or `setState` to mutate state.
    * You should treat `this.state` as immutable.
    *
    * There is no guarantee that `this.state` will be immediately updated, so
    * accessing `this.state` after calling this method may return the old value.
    *
    * @internal
    */
	enqueueReplaceState: function() {},

	/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
	enqueueSetState: function(publicInstance, partialState) {
		publicInstance.state = Object.assign(publicInstance.state, partialState);

		//publicInstance.build();
	},
};

export default ReactNoopUpdateQueue;
