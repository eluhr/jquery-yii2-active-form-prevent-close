# jquery-yii2-active-form-prevent-close
JQuery helper to prevent leaving page if a yii2 active from has been modified

## Install
```
composer require eluhr/jquery-yii2-active-form-prevent-close
```

## Example usuage

```php
use eluhr\activeFormPreventFromClose\assets\ActiveFormPreventCloseAsset;

// $view must be instance of current context's view component
ActiveFormPreventCloseAsset::register($view);

// Than you can use this in your js
$("w0").preventFromClosing()
```

As an alternative, the asset can also be used as a dependency of another asset bundle.
