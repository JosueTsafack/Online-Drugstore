<?php
use ContagtModules\ApplicationRouteInterface;
use ContagtModules\OSDefiningViewController;

/**
 * Created by contagt GmbH, all rights reserved
 * User: Stephan Brandt <stephan@contagt.com>
 * Date: 27.10.15
 * Time: 16:02
 */
class ModuleViewer extends OSDefiningViewController implements ApplicationRouteInterface
{

    private $parent;

    private $hadContent = false;

    /**
     * ModuleViewer constructor.
     * @param $original_route
     * @throws BuildingNotFoundException
     * @throws Exception
     */
    public function __construct($original_route)
    {
        parent::__construct();
        $this->parent = $original_route->parent;
        $this->checkAndInstantiateCorrectBuildingId();
        $modules = $this->getModulesForBuildings();
        if($modules != false) {
            $this->initViewControllerWithModules($modules);
        } else {
            $this->initViewControllerWithEmptyMessage();
        }
    }

    /**
     * @param $modules
     * @throws Exception
     */
    private function initViewControllerWithModules($modules) {
        global $instance;
        $contents = [];
        $contents["html_header"] = ["html_title" => $this->getString("modulesTitle")];
        $moduleContents = [];
        $i = 0;
        foreach ($modules as $id => $module) {
            $moduleInstance = $instance->instanceModule($id, $module::getClassName());
            if ($module::providesLiveTile($moduleInstance)) {
                $this->hadContent = true;
                $moduleContents[$i]["header_uri"] = $module::getTileImage();
                $moduleContents[$i]["module_title"] = $moduleInstance->getString($module::getTitleResource());
                if ($moduleInstance->getModuleInstance() != null) {
                    $moduleContents[$i]["module_last_updated"] = date("d.m.Y - h:i", $moduleInstance->getModuleInstance()->lastUpdated());
                }
                try {
                    $moduleContents[$i]["module_contents"] = $moduleInstance->runLiveTile();
                } catch (Exception $e) {
                    $moduleContents[$i]["module_contents"] = $e->getMessage();
                }
                $moduleContents[$i]["open_module"] = $this->getString("openModule");
                $moduleContents[$i]["module_uri"] = $instance->getModuleController()->getModuleBaseInstance($id, $module::getClassName())->getModuleUri();
                $i++;
            }
        }
        if (count($moduleContents) > 0) {
            $arrayContents = array("contents" => $moduleContents);
            $contents["moduleviewer_modules"] = $arrayContents;
            $contents["html_footer"] = ["path" => MODULES_URL, "custom_js" => ""];
            $this->setContents($contents);
        } else {
            switch ($this->getOperatingSystem()) {
                case __default_os :
                {
                    $this->initViewControllerWithEmptyMessage();
                }
            }
        }
    }

    /**
     * @throws \Exception
     */
    private function initViewControllerWithEmptyMessage() {
        $this->setContents(
            array(
                "html_header" => ["title" => $this->getString("noModulesAvailableTitle")],
                "moduleviewer_nomodules" => ["content" => $this->getString("noModulesAvailable")],
                "html_footer" => ["path" => MODULES_URL ,"custom_js" => ""]
            )
        );
    }

    /**
     * @throws BuildingNotFoundException
     */
    private function checkAndInstantiateCorrectBuildingId() {
        global $instance;
        if ($instance->building_id == -1) {
            throw new \BuildingNotFoundException("We need a Building to show a Module Overview");
        }
    }

    /**
     * @return array
     */
    private function getModulesForBuildings() {
        global $instance;
        return $instance->checkModulesOfBuildings($instance->rpc->getModulesOfBuilding($instance->building_id));
    }


    function run()
    {
        $this->showView();
    }

    function getModuleInstance()
    {
        return $this->parent;
    }
}