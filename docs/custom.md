---
sidebar_position: 5
---

# Custom Data Formats

We provide a set of [default data formats](./formats) for submitting
signed data, but some applications may wish to use their own formats
for signing and verifying messages.

We provide a way to write custom actions to support this:

```ts
export const actions = {
	doThing: customAction({
		"$id": "https://example.com/string",
		"$schema": "https://json-schema.org/draft/2020-12/schema",
		"type": "object",
		"properties": {
			"one": { "type": "string" },
			"two": { "type": "string" }
		}
	}, ({ one, two }, { db, hash }) => {
		db.things.set(hash, { one, two });
	})
}
```

This code above allows any unsigned message that matches the [JSON
Schema](https://json-schema.org/) to be gossipped and relayed over the
network.

For most cases, you should also enforce some level of signature
verification.

```ts
export const actions = {
	doSignedThing: customAction({
		"$id": "https://example.com/string",
		"$schema": "https://json-schema.org/draft/2020-12/schema",
		"type": "object",
		"properties": {
			"signature": { "type": "string" },
			"signingAddress": { "type": "string" },
			"message": { "type": "string" }
		}
	}, ({ signature, signingAddress, message }, {db, hash}) => {
		const domain = {
			name: "TestApp"
		};
		const fields = {
			Message: [
				{ name: "message", type: "string" },
				{ name: "signingAddress", type: "string" }
			]
		};
		const value = { signingAddress, message };
		const recoveredAddress = verifyTypedData(domain, fields, value, signature)
		if(recoveredAddress == signingAddress) {
			// signature is valid, perform action
			db.things.set(hash, { message });
		} else {
			// signature is invalid
			return false;
		}
	})
};
```

Note that customAction() and verifyTypedData() are provided as globals in the VM.