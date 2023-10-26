<?php

namespace eluhr\activeFormPreventFromClose\assets;

use yii\web\AssetBundle;
use yii\web\JqueryAsset;

class ActiveFormPreventCloseAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/dist';

    public $js = [
        'active-form-prevent-close.js'
    ];
    
    public $depends = [
      JqueryAsset::class  
    ];
}
