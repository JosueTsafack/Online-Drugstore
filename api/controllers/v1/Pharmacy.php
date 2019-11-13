<?php
/**
 * @package    PHP Advanced API 
 * @author     Nguemo Tsafack Josue <nguemojosue@gmail.com>
 * @copyright  2019 Nguemo Tsafack Josue
 * @version    1.0.0
 * @since      25.10.2019
 */

namespace BestShop\v1;

use Db;
use BestShop\Route;
use BestShop\Database\DbQuery;
use BestShop\User\Pharmacy as PharmacyObject;
use BestShop\Util\ArrayUtils;
use BestShop\Validate;

class Pharmacy extends Route {

	public function addPharmacy() {
		$api = $this->api;
		$payload = $api->request()->post(); 

		$pharmacy_name = ArrayUtils::get($payload, 'pharmacy_name');
		$phone = ArrayUtils::get($payload, 'phone');
		$adresse = ArrayUtils::get($payload, 'adresse');
        $email = ArrayUtils::get($payload, 'email');
        $creation_date = ArrayUtils::get($payload, 'creation_date');
		$promoter_name = ArrayUtils::get($payload, 'promoter_name');
		$promoter_phone = ArrayUtils::get($payload, 'promoter_phone');
		
		if (!Validate::isGenericName($pharmacy_name)) {
			return $api->response([
				'success' => false,
				'message' => 'S\'il vous plait entrez un nom valide!'
			]);
        }
        
        if (!Validate::isGenericName($adresse)) {
			return $api->response([
				'success' => false,
				'message' => 'S\'il vous plait entrez une adresse valide!'
			]);
		}

		$pharmacy = new PharmacyObject();
		$pharmacy->pharmacy_name = $pharmacy_name;
		$pharmacy->phone = $phone;
        // $pharmacy->price = (float) $price;
        // $pharmacy->category = $category->id;
        $pharmacy->adresse = $adresse;
        $pharmacy->email = $email;
        $pharmacy->creation_date = $creation_date;
        $pharmacy->promoter_name = $promoter_name;
        $pharmacy->promoter_phone = $promoter_phone;

		$ok = $pharmacy->save();
		// or $user->add();

		if (!$ok) {
			return $api->response([
				'success' => false,
				'message' => 'Désolé! cet E-mail est déja utilisé, s\'il vout plaît reéssayez à nouveau'
			]);
		}

		return $api->response([
			'success' => true,
			'message' => 'Merci! notre équipe entrera en contacte avec vous les jours à venir'
		]);
	}

}


