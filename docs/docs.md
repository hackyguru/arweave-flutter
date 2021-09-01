# Arweave Flutter Plugin

![Arweave Flutter Plugin](https://cdn.discordapp.com/attachments/737991261541367830/882688220805087312/arweaveflutter.png)

Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever – for the very first time. Arweave is a community owned permaweb.

Flutter is one of the rapidly growing cross-platform development frameworks usually used for developing mobile (Android + iOS), desktop and web applications. This plugin can help you to easily use Arweave in your Flutter project.

## Adding dependency

Add the dependency in `pubspec.yaml` :

```yaml
dependencies:
  arweave:
    git: https://github.com/hackyguru/arweave-flutter.git
```

After adding, make sure you save the file so that all the dependencies get installed automatically.

## Importing the package

After installing the dependency, simply import the package anywhere you wish to use :

```dart
import 'package:arweave/arweave.dart';

void main() {
  var client = Arweave();
}
```

## How To Use

### Loading wallet from a JSON file

Call the below function to load a wallet from a JSON object/ file :

```dart
Wallet.fromJwk(json.decode('<wallet data>'));
```

### Creating Transactions

Creating transactions with is simple. First prepare a transaction like below, optionally adding some tags:

```dart
final transaction = await client.transactions.prepare(
  Transaction.withBlobData(data: utf8.encode('Hello Arweave!')),
  wallet,
);

transaction.addTag('App-Name', 'Demo app');
transaction.addTag('App-Version', '1.0.0');
```

### Signing the transaction :

```dart
await transaction.sign(wallet);
```

### Uploading the transaction.

This can be done in a single call, useful for small transactions.

```dart
await client.transactions.post(transaction);
```

### Using Data Bundles

```dart
final dataItem = DataItem.withBlobData(
  owner: wallet.owner,
  data: utf8.encode('hello world'),
)
  ..addTag('MyTag', '0')
  ..addTag('OtherTag', 'Foo');

await dataItem.sign(wallet);
```

### Creating Bundle Transactions

```dart
final transaction = await client.transactions.prepare(
  Transaction.withDataBundle(bundle: DataBundle(items: [dataItem])),
  wallet,
);
```

### Contribution

Feel free to fork and create PRs if you wish to contribute. More information will be updated soon.
