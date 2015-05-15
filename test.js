import rewire from 'rewire';
var callMe = rewire('./index')

callMe.__set__('foo', 'bar')
callMe();

