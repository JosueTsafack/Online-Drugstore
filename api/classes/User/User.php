<?php 
 /**
 * @package    PHP Advanced API 
 * @author     Nguemo Tsafack Josue <nguemojosue@gmail.com>
 * @copyright  2019 Nguemo Tsafack Josue
 * @version    1.0.0
 * @since      25.10.2019
 */

namespace BestShop\User;

use Db;
use BestShop\Database\DbQuery;
use BestShop\ObjectModel;

class User extends ObjectModel {
	/** @var $id User ID */
	public $id;

	/** @var string $first_name */
    public $first_name;
    
    /** @var string $last_name */
	public $last_name;

	/** @var string $phone */
    public $phone;
    
    /** @var string $adresse */
    public $adresse;
    
    /** @var string $email */
	public $email;
	
	/** @var $date_add */
    public $date_add;
	
	/**
     * @see ObjectModel::$definition
     */
    public static $definition = array(
        'table' => 'user',
        'primary' => 'user_id',
        'fields' => array(
            'first_name' => array('type' => self::TYPE_STRING, 'required' => true, 'validate' => 'isString', 'size' => 50),
            'last_name' => array('type' => self::TYPE_STRING, 'required' => true, 'validate' => 'isString', 'size' => 50),
            // 'phone' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 15),
            'phone' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 50),
            'adresse' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 100),
			'email' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 100),
			'date_add' => array('type' => self::TYPE_DATE, 'validate' => 'isDate'),
        )
    );

     /**
     * constructor.
     *
     * @param null $id
     */
    public function __construct($id = null)
    {
        parent::__construct($id);
	}
}