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
				'message' => 'Enter a valid first name'
			]);
        }
        
        if (!Validate::isGenericName($last_name)) {
			return $api->response([
				'success' => false,
				'message' => 'Enter a valid last name'
			]);
        }
        
        if (!Validate::isGenericName($adresse)) {
			return $api->response([
				'success' => false,
				'message' => 'Enter a valid adresse'
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
				'message' => 'Unable to subscribe, please try again later'
			]);
		}

		return $api->response([
			'success' => true,
			'message' => 'User successfully subscribed'
		]);
	}

}


