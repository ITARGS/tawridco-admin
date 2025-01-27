<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model {
    use HasFactory;

    protected $hidden = [];
    protected $appends = [ 'logo_url', 'national_identity_card_url', 'address_proof_url', 'categories_array', 'commercial_registration_url', 'municipality_license_url' ];

    public static $statusRegistered = 0;
    public static $statusActive = 1;
    public static $statusRejected = 2;
    public static $statusDeactivated = 3;
    public static $statusRemoved = 7;

    public static $Registered = 'Registered';
    public static $Active = 'Active';
    public static $Rejected = 'Rejected';
    public static $Deactivated = 'Deactivated';
    public static $Removed = 'Removed';

    public function getLogoUrlAttribute() {
        if ( $this->logo ) {
            $logo_url = asset( 'storage/' . $this->logo );
            return $logo_url;
        }
        return $this->logo;
    }

    public function getCommercialRegistrationUrlAttribute() {
        if ( $this->commercial_registration ) {
            $commercial_registration_url = asset( 'storage/' . $this->commercial_registration );
            return $commercial_registration_url;
        }
        return $this->commercial_registration;
    }

    public function getMunicipalityLicenseUrlAttribute() {
        if ( $this->municipality_license ) {
            $municipality_license_url = asset( 'storage/' . $this->municipality_license );
            return $municipality_license_url;
        }
        return $this->municipality_license;
    }

    public function getNationalIdentityCardUrlAttribute() {
        if ( $this->municipality_license ) {
            $national_identity_card_url = asset( 'storage/' . $this->national_identity_card );
            return $national_identity_card_url;
        }
        return $this->national_identity_card;
    }

    public function getAddressProofUrlAttribute() {
        if ( $this->address_proof ) {
            $address_proof_url = asset( 'storage/' . $this->address_proof );
            return $address_proof_url;
        }
        return $this->address_proof;
    }

    public function admin() {
        return $this->belongsTo( Admin::class, 'admin_id', 'id' );
    }

    public function city() {
        return $this->belongsTo( City::class, 'city_id', 'id' );
    }

    public function categories() {
        return $this->belongsToMany( Category::class, 'sellers', 'id', 'categories' );
    }

    public function getCategoriesArrayAttribute() {
        $categoriesArray = is_string( $this->categories ) ? explode( ',', $this->categories ) : [];
        $categoriesCollection = collect( $categoriesArray );
        if ( app()->getLocale() == 'en' ) {
            $categoryNameField = 'name_en';
        } else {
            $categoryNameField = 'name_ar';
        }
        $categoryNames = Category::whereIn( 'id', $categoriesCollection )->pluck( $categoryNameField )->toArray();
        $commaSeparatedNames = implode( ', ', $categoryNames );
        return $commaSeparatedNames;
    }
}
