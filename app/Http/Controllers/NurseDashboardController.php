<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class NurseDashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/NurseDashboard');
    }
}
