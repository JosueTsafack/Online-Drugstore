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

        
class Pharmacy extends ObjectModel {
	/** @var $id Pharmacy ID */
	public $id;

	/** @var string $pharmacy_name */
    public $pharmacy_name;
    
	/** @var string $phone */
    public $phone;
    
    /** @var string $adresse */
    public $adresse;

    /** @var string $email */
	public $email;
    
    /** @var string $creation_date */
    public $creation_date;
    
     /** @var string $promoter_name */
     public $promoter_name;
    
     /** @var string $promoter_phone */
     public $promoter_phone;
	
	/** @var $date_add */
    public $date_add;
	
	/**
     * @see ObjectModel::$definition
     */
    public static $definition = array(
        'table' => 'pharmacy',
        'primary' => 'pharmacy_id',
        'fields' => array(
            'pharmacy_name' => array('type' => self::TYPE_STRING, 'required' => true, 'validate' => 'isString', 'size' => 100),
            // 'phone' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 15),
            'phone' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 50),
            'adresse' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 100),
            'email' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 100),
            'creation_date' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 50),
            'promoter_name' => array('type' => self::TYPE_STRING, 'required' => true, 'validate' => 'isString', 'size' => 50),
            'promoter_phone' => array('type' => self::TYPE_STRING, 'required' => true, 'size' => 50),
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