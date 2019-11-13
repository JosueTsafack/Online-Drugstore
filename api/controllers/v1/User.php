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
use BestShop\User\User as UserObject;
use BestShop\Util\ArrayUtils;
use BestShop\Validate;

class User extends Route {

	public function addUser() {
		$api = $this->api;
		$payload = $api->request()->post(); 

		$first_name = ArrayUtils::get($payload, 'first_name');
		$last_name = ArrayUtils::get($payload, 'last_name');
		$phone = ArrayUtils::get($payload, 'phone');
		$adresse = ArrayUtils::get($payload, 'adresse');
		$email = ArrayUtils::get($payload, 'email');
		
		if (!Validate::isGenericName($first_name)) {
			return $api->response([
				'success' => false,
				'message' => 'S\'il vous plait entrez un prénom valide!'
			]);
        }
        
        if (!Validate::isGenericName($last_name)) {
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

		$user = new UserObject();
		$user->first_name = $first_name;
		$user->last_name = $last_name;
        $user->phone = $phone;
        $user->adresse = $adresse;
        $user->email = $email;

		$ok = $user->save();
		// or $user->add();

		if (!$ok) {
			return $api->response([
				'success' => false,
				'message' => 'Désolé! cet E-mail est déja utilisé, s\'il vout plaît reéssayz à nouveau'
				// 'message' => 'Unable to subscribe, please try again later'
			]);
		}

		return $api->response([
			'success' => true,
			'message' => 'Merci! notre équipe entrera en contacte avec vous les jours à venir'
			// 'message' => 'User successfully subscribed'
		]);
	}

}


