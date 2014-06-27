<?php

namespace Store\CatalogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CatalogController extends Controller
{
    public function indexAction()
    {
        return $this->render('StoreCatalogBundle::index.html.twig');
    }
}
