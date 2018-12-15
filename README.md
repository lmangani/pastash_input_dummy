<img src="http://i.imgur.com/wYjsCqz.png"/>

# pastash_input_dummy
Test Plugin for Pastash Next-Gen, Do NOT use this!


### Notes
* Only works with exports from `@pastash/pastash` 1.0.44 and higher
* Only works with plugins published in the `@pastash` keyspace


### Usage
To use a plugin alongside `pastash` both should be installed globally:
```
npm install -g @pastash/pastash
npm install -g @pastash/input_dummy
```

Configuration functions not provided internally result in an npm lookup using a combination of `type` and `name`
##### Example
```
input {
  dummy {}
}
```
##### Lookup
`@pastash/input_dummy`


