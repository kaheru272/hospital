<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class NurseDashboardController extends Controller
{
    public function index(): Response
    {
        if (auth()->user()->role !== 'Nurse') {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Dashboard/NurseDashboard');
    }
}
