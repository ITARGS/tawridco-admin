<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model {
    use HasFactory;

    protected $appends = [ 'image_url', 'name' ];
    protected $hidden = [];

    public function getImageUrlAttribute() {
        $image_url = '';
        if ( $this->image ) {
            $image_url = asset( 'storage/'.$this->image );
        }
        return $image_url;
    }

    public function name(): Attribute {
        return Attribute::make(
            get: function () {
                if ( app()->getLocale() == 'en' ) {
                    return $this->name_en ?? $this->name_ar;
                } else {
                    return $this->name_ar ?? $this->name_en;
                }
            }
            ,
            set: function ( $value ) {
                if ( app()->getLocale() == 'en' ) {
                    $this->attributes[ 'name_en' ] = $value;
                } else {
                    $this->attributes[ 'name_ar' ] = $value;
                }
            }
        );
    }
}
