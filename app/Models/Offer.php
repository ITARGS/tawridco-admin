<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model {
    use HasFactory;
    protected $appends = [ 'image_url', 'type_name', 'section_title' ];
    protected $hidden = [ 'created_at', 'updated_at' ];

    public function getImageUrlAttribute() {
        if ( $this->image ) {
            $image_url = asset( 'storage/'.$this->image );
            return $image_url;
        }
        return $this->image;
    }

    public function category() {
        if ( app()->getLocale() == 'en' ) {
            return $this->belongsTo( Category::class, 'type_id', 'id' )->select( 'id', 'name_en' );
        } else {
            return $this->belongsTo( Category::class, 'type_id', 'id' )->select( 'id', 'name_ar' );

        }
    }

    public function product() {
        if ( app()->getLocale() == 'en' ) {

            return $this->belongsTo( Product::class, 'type_id', 'id' )->select( 'id', 'name_en', 'slug' );
        } else {
            return $this->belongsTo( Product::class, 'type_id', 'id' )->select( 'id', 'name_ar', 'slug' );

        }
    }

    public function section() {
        return $this->belongsTo( Section::class, 'section_position', 'id' )->select( 'id', 'title' );
    }

    public function getTypeNameAttribute() {
        $type_name = '';
        if ( $this->type == 'category' ) {
            if ( app()->getLocale() == 'en' ) {
                $type_name = $this->category->name_en??'';
            } else {
                $type_name = $this->category->name_ar??'';

            }

        } elseif ( $this->type == 'product' ) {
            if ( app()->getLocale() == 'en' ) {
                $type_name = $this->product->name_en??'';
            } else {
                $type_name = $this->product->name_ar??'';
            }
        }
        return $type_name;
    }

    public function getSectionTitleAttribute() {
        $section_title = '';
        if ( $this->position == 'below_section' ) {
            $section_title = $this->section->title??'';
        }
        return 'Below '.$section_title;
    }

}
