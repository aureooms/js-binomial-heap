
/**
 * Insert the jth element of an array in an existing
 * dary heap in interval [i, j[
 *
 * Hypothesis : i <= j
 *
 * @param {int} arity arity of the heap
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root
 * @param {int} j - 1 is the last leaf
 */

daryheap.push = function ( arity, compare, a, i, j ) {

	// percolate up the new last element

	return daryheap.percolateup( arity, compare, a, i, j + 1, j );

};