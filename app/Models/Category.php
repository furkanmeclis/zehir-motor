<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    public static function poisonImportCategories($categories)
    {
        $inserted = 0;
        $updated = 0;
        foreach ($categories as $category) {
            $category = (object) $category;
            if(self::where("name",$category->name)->exists()){
                $cat = self::where("name",$category->name)->first();
                $cat->name = $category->name;
                $cat->slug = $category->slug;
                $cat->save();
                $updated++;
            }else{
                $cat = new Category();
                $cat->name = $category->name;
                $cat->slug = $category->slug;
                $cat->save();
                $inserted++;
            }

        }
        return [
            'inserted' => $inserted,
            'updated' => $updated
        ];
    }
}