<?php

namespace Store\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction()
    {
        return $this->render('StoreMainBundle:Main:index.html.twig');
    }
}
