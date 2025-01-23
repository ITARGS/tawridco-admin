<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $appends = ['image_url', 'has_child', 'has_active_child', 'name', 'subtitle'];
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function getImageUrlAttribute()
    {

        if ($this->image) {
            $image_url = asset('storage/' . $this->image);
            return $image_url;
        }
        return $this->image;
    }

    public function parent()
    {
        return $this->hasOne(Category::class, 'id', 'parent_id');
    }

    public function allParents()
    {
        return $this->parent()->with('allParents');
    }

    public function childs()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    public function allChilds()
    {
        return $this->childs()->with('allChilds');
    }

    public function activeChilds()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id')->where('status', 1);
    }

    public function allActiveChilds()
    {
        return $this->activeChilds()->with('allActiveChilds');
    }

    public function catChilds()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    public function getHasChildAttribute()
    {
        $hasChild = false;
        if ($this->catChilds->count() > 0) {
            $hasChild = true;
        }
        unset($this->catChilds);
        return $hasChild;
    }

    public function catActiveChilds()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id')->where('status', 1);
    }


    public function getHasActiveChildAttribute()
    {
        $hasChild = false;
        if ($this->catActiveChilds->count() > 0) {
            $hasChild = true;
            foreach ($this->catActiveChilds as $child) {
                $child->parent_name = $this->name; // Assuming you want to use the name of the parent as parent_name
            }
        }

        return $hasChild;
    }

    public function name(): Attribute
    {
        return Attribute::make(
            get: function () {
                if (app()->getLocale() == 'en') {
                    return $this->name_en ?? $this->name_ar;
                } else {
                    return $this->name_ar ?? $this->name_en;
                }
            },
            set: function ($value) {
                if (app()->getLocale() == 'en') {
                    $this->attributes['name_en'] = $value;
                } else {
                    $this->attributes['name_ar'] = $value;
                }
            }
        );
    }

    public function subtitle(): Attribute
    {
        return Attribute::make(
            get: function () {
                if (app()->getLocale() == 'en') {
                    return $this->subtitle_en ?? $this->subtitle_ar;
                } else {
                    return $this->subtitle_ar ?? $this->subtitle_en;
                }
            },
            set: function ($value) {
                if (app()->getLocale() == 'en') {
                    $this->attributes['subtitle_en'] = $value;
                } else {
                    $this->attributes['subtitle_ar'] = $value;
                }
            }
        );
    }
}
