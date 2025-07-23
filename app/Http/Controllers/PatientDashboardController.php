<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PatientDashboardController extends Controller
{
    public function index(): Response
    {
        if (auth()->user()->role !== 'Patient') {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Dashboard/PatientDashboard');
    }
}
