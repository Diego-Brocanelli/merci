<?php

namespace Store\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function homeAction()
    {
        return $this->render('StoreMainBundle::home.html.twig');
    }
}
