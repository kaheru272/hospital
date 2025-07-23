<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DoctorDashboardController extends Controller
{
    public function index(): Response
    {
        if (auth()->user()->role !== 'Doctor') {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Dashboard/DoctorDashboard');
    }
}
